import { Queue } from "bullmq";

const notificationQ = new Queue('email-queue')

async function init(){
    const result = await notificationQ.add('email to abhi', {email:"abhishekssingh0000@gmail.com", subject:"Welcome ABHI", body:"Hey i Am abhi learning message queues"})
    console.log("Job added to queue", result.id)
}
init()