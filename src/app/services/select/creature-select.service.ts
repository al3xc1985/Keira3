import { Injectable } from '@angular/core';

import { SelectService } from './select.service';
import { CreatureTemplate } from '../../components/editors/creature/creature-template/creature-template.type';
import { QueryService } from '../query.service';
import { CreatureHandlerService } from '../handlers/creature-handler.service';
import { CREATURE_TEMPLATE_TABLE } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class CreatureSelectService extends SelectService<CreatureTemplate> {
  constructor(
    protected queryService: QueryService,
    public handlerService: CreatureHandlerService,
  ) {
    super(queryService, handlerService, CREATURE_TEMPLATE_TABLE, 'entry', 'name', ['entry', 'name', 'subname']);
  }
}
