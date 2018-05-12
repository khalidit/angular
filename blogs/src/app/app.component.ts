import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog aliateck';
  postItems: Array<Post> = [
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed convallis leo, sed vulputate ex. Sed condimentum porttitor vehicula. Morbi turpis leo, pharetra in mi et, condimentum rutrum augue. Sed a tellus sed velit suscipit dictum. Nulla id commodo ipsum. Sed eget faucibus velit, quis condimentum arcu. Vestibulum cursus, libero quis venenatis tempus, lacus tellus fermentum lacus, a tincidunt nulla ipsum ornare quam. Nulla eget massa dui. Nam suscipit magna urna, sit amet maximus arcu aliquet ac. Aenean iaculis eros vitae tellus mollis condimentum at eget nunc. Vivamus eget augue sit amet nisi suscipit vehicula.'),
    new Post('Mon deuxième post', 'Sed id massa id mi scelerisque dignissim. Nam bibendum sed urna id posuere. Curabitur sit amet pellentesque ex. Curabitur vulputate lectus sollicitudin nulla porttitor, vitae pretium arcu volutpat. Nullam ac cursus dui, ut ultrices tortor. Mauris finibus tristique nisl, non egestas ex pretium et. Aenean auctor sed lacus vitae condimentum. Vestibulum quam ligula, ornare in ultrices quis, egestas non diam.'),
    new Post('Mon troisième post', 'Nullam et tortor cursus, finibus lorem sit amet, viverra dui. Curabitur efficitur, mi sed cursus blandit, turpis urna eleifend eros, eget tristique nulla purus nec lacus. Praesent eget condimentum arcu, vitae iaculis elit. Nam justo lectus, egestas sed nibh nec, vestibulum porttitor nunc. Pellentesque dolor est, pulvinar id leo nec, luctus faucibus lorem. Proin nec odio at urna semper tincidunt. Etiam a mauris lacus. Nunc nunc velit, malesuada non eros vitae, fringilla pretium lacus. Sed rutrum lacinia dignissim. Sed sed vehicula urna. Pellentesque congue, arcu at iaculis pharetra, nisi orci varius ex, ac vestibulum neque massa vel magna. Nam ornare pulvinar leo nec dignissim. Nulla elementum vestibulum velit, sed suscipit erat fringilla et. Aliquam consectetur purus ullamcorper, commodo arcu sit amet, hendrerit diam.')
  ];
}
