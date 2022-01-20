import { analyseUrl as AxeAnalyseUrl } from './axe-analyser.mjs'
import { SiteA11yTestingRepository } from './site-a11y-testing-repository.mjs'

export class AnalyseService {
  constructor () {
    this.siteTestingRepository = new SiteA11yTestingRepository()
  }

  analyseUrl (url) {
    return AxeAnalyseUrl(url).then(result => {
      const siteTestEntry = this.siteTestingRepository.create({
        url: url,
        analysis: result,
        error: null
      })

      this.siteTestingRepository.save(siteTestEntry)

      return siteTestEntry
    })
  }
}
