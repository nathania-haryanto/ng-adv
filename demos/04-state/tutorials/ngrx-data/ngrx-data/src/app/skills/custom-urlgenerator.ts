import { Injectable } from "@angular/core";
import { DefaultHttpUrlGenerator, Pluralizer, HttpResourceUrls } from "@ngrx/data";

@Injectable()
export class CustomurlHttpGenerator extends DefaultHttpUrlGenerator {
  constructor(pluralizer: Pluralizer) {
    super(pluralizer);
  }

  protected override getResourceUrls(
    entityName: string,
    root: string,
    trailingSlashEndpoints?: boolean
  ): HttpResourceUrls {
    let resourceURLs = this.knownHttpResourceUrls[entityName];
    if (entityName == 'Skill') {
      resourceURLs = {
        collectionResourceUrl: 'http://localhost:3000/skills/',
        entityResourceUrl: 'http://localhost:3000/skills/',
      };
      this.registerHttpResourceUrls({ [entityName]: resourceURLs });
    }
    return resourceURLs;
  }
}