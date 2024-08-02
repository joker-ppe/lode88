const amqplib = require('amqplib');

const username = "fake_cabinet"
const password = "fake_cabinet123@"
const host = "54.169.246.109"
const port = 5672  //# Default port for AMQP
const vhost = "/"  //# Default virtual host



const amqp_url = `amqp://${username}:${password}@${host}:${port}${vhost}`

let uuidAction = "";

const sendDataToExchange = async ({ exchange, msg }) => {
    try {

        const conn = await amqplib.connect(amqp_url);
        const channel = await conn.createChannel();

        // const queueName = 'mhz.humidity';

        await channel.assertExchange(exchange, 'fanout', {
            durable: false,
            autoDelete: true,
        });

        // await channel.assertQueue(queueName, {
        //     durable: false,
        //     autoDelete: true,
        // });

        await channel.publish(exchange, '', Buffer.from(msg));

        console.log(`exchange: ${exchange} - Message: ${msg}`);

        // await channel.sendToQueue(queueName, Buffer.from(msg));

        // close channel and connection
        await channel.close();
        await conn.close();
    } catch (error) {
        console.log(error);
    }
}

async function receiveDataFromExchange(exchange, queueName) {
    try {
        const conn = await amqplib.connect(amqp_url);
        const channel = await conn.createChannel();

        await channel.assertExchange(exchange, 'fanout', {
            durable: false,
            autoDelete: true,
        });

        // const queueName = 'cabinet.1.1.action';

        await channel.assertQueue(queueName, {
            durable: false,
            autoDelete: true,
        });

        await channel.bindQueue(queueName, exchange, '');

        console.log(`Waiting for messages in queue: ${queueName}. To exit press CTRL+C`);

        await channel.consume(queueName, (msg) => {
            if (msg !== null) {
                console.log(`Received message: ${msg.content.toString()}`);

                const data = JSON.parse(msg.content.toString());
                uuidAction = data['uuid'];

                channel.ack(msg);

                setTimeout(() => {
                    const data = {
                        "uuid": uuidAction,
                        "userId": 1,
                        "scheduleId": 1,
                        "dayIndex": 1,
                        "slotIndex": 1,
                        "slotAction": "START",
                        "completeAction": true
                    };

                    sendDataToExchange({ exchange: 'cabinet.1.action.reply', msg: JSON.stringify(data) });
                }, 3000);
            }
        });
    } catch (error) {
        console.log(error);
    }
}



const sendFakeData = async () => {
    let randomNum = (Math.random() * (99 - 20 + 1) + 20).toFixed(1);

    await sendDataToExchange({exchange: 'cabinet.10.humidity', msg: randomNum.toString()});

    randomNum = (Math.random() * (50 + 1)).toFixed(1);

    await sendDataToExchange({exchange: 'cabinet.10.temperature', msg: randomNum.toString()});

    randomNum = (Math.random() * (10000 - 1 + 1)).toFixed(1);

    await sendDataToExchange({exchange: 'cabinet.10.light', msg: randomNum.toString()});

    ///
    // randomNum = (Math.random() * (99 - 20 + 1) + 20).toFixed(1);
    //
    // await sendDataToExchange({exchange: 'cabinet.2.humidity', msg: randomNum.toString()});
    //
    // randomNum = (Math.random() * (50 - 0 + 1)).toFixed(1);
    //
    // await sendDataToExchange({exchange: 'cabinet.2.temperature', msg: randomNum.toString()});
    //
    // randomNum = (Math.random() * (100000 - 1 + 1)).toFixed(1);
    //
    // await sendDataToExchange({exchange: 'cabinet.2.light', msg: randomNum.toString()});

    console.log('\n');
}

// receiveDataFromExchange(`cabinet.1.action`,'cabinet.1.1.action');
// sendFakeData();
setInterval(sendFakeData, 1000);




