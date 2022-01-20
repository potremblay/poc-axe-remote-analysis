import { insertOne } from './mongodb-client.mjs'

export class SiteA11yTestingRepository {
  create (createEntryDto) {
    const { url, analysis, error } = createEntryDto

    return {
      url,
      analysis,
      error,
      timestamps: Date.now()
    }
  }

  save (saveEntryDto) {
    insertOne('siteA11yTesting', 'analysisEntries', saveEntryDto)
  }
}
