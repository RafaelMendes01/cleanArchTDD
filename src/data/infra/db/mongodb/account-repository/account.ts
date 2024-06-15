import { AddAccountRepository } from '../../../../protocols/add-account-repository'
import { AccountModel, AddAccountModel } from '../../../../usecases/add-account/db-add-account-protocols'
import { MongoHelper } from '../helpers/mongo-helper'
export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    // @ts-expect-error
    return MongoHelper.map(result.ops[0])
  }
}
