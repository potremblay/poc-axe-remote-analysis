import cron from 'node-cron'
import { MongoClient  } from 'mongodb';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

/*cron.schedule('* * * * * *', function() {
    console.log('running a task every seconds')
})*/