import {configure} from '@storybook/react';

// automatically import all files ending in *._stories_.js
configure(require.context('../src/_stories_', true, /\.stories\.js$/), module);
