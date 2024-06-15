import { MongoClient } from 'mongodb'

export const MongoHelper = {
  // @ts-expect-error
  client: null as MongoClient,

  async connect (url: string): Promise<void> {
    // @ts-expect-error
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
