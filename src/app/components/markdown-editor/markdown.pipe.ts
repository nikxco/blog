import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // marked.setOptions({
    //   highlight: function (code) {
    //     return highlightjs().highlightBlock(code).value;
    //   },
    // });
    return marked(value);
  }

}
