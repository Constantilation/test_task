import React from 'react';
import {App} from './App'
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('Test button rendering', () => {
    it('should be defined', () => {
        expect(App).toBeDefined();
    });
    it('should render correctly', () => {
        const button = shallow(<App size={'l'}/>);
        const foundButton = button.find('Button');
        expect(foundButton).toBeTruthy();
    });
});


describe('Test Button states', () => {
    it('zero state', () => {
        const button = shallow(<App size={'l'}/>);

        const foundButton = button.find('Button');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        foundButton.props().onClickFn();

        expect(button.find('Button').html().includes('Loading')).toBeTruthy();
    });

    it('loading state', () => {
        const button = shallow(<App size={'l'}/>);

        const foundButton = button.find('Button');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        foundButton.props().onClickFn();

        expect(button.find('Button').html().includes('Loading')).toBeTruthy();
    });
});

describe('Fetching test', () => {
    it('Test click event', () => {
        const button = shallow(<App size={'l'}/>);

        const foundButton = button.find('Button');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        foundButton.props().onClickFn();

        expect(button.find('Button').html().includes('Fetch')).toBeFalsy();
        expect(button.find('Button').html().includes('Loading')).toBeTruthy();
    });

  it('Test fetch timeout event', async () => {
    const button = shallow(<App size={'l'}/>);

    const foundButton = button.find('Button');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    foundButton.props().onClickFn();

    console.log(button.find('Button').html())
    setTimeout(() => {
      expect(button.find('Button').html().includes('Fetch')).toBeTruthy();
      expect(button.find('Button').html().includes('Loading')).toBeFalsy();
      }, 4000);
  });
});