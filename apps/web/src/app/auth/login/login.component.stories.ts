import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LoginComponent } from './login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


export default {
  title: 'LoginComponent',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule
      ],
    }),
    // MaterialModule
  ],
} as Meta<LoginComponent>;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}