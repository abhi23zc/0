import { Worker } from "bullmq";
import IORedis from "ioredis";
const redisConnection = new IORedis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null
});

const sendEmail = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log("Job received", job.data);
    console.log("Job processed", job.id);
    await sendEmail(5000);
  },
  { connection: redisConnection }
);
