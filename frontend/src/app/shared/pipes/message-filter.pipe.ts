import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageFilter',
  standalone: true
})
export class MessageFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
