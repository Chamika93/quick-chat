import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MessageList } from '../components';

describe('<MessageList />', () => {
    let getByText;
  
    describe('display the message list', () => {
      beforeEach(async () => {
        ({ getByText} = render(<MessageList messages={['Hi']}/>));
      });
  
      it('renders the message', () => {
        expect(getByText('Hi')).toBeInTheDocument()
      });
    
    });
  });