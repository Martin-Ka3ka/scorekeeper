import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Player />);
});

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);

    const playerNameRendered = playerComponent.find('.Player__name').text();

    expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
    const playerScorePassed = 6;
    const playerComponent = shallow(<Player score={playerScorePassed} />);

    const playerScoreRendered = playerComponent.find('.Player__score').text();

    expect(Number(playerScoreRendered)).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const plusButton = playerComponent.find('.Player__button').at(0);

    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange}
    />);

    const minusButton = playerComponent.find('.Player__button').at(1);

    minusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onPlayerRemove when Remove button is clicked', () => {
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<Player id={1} onPlayerRemove={mockedOnPlayerRemove} />);

    const removeButton = playerComponent.find('.Player__button').last();

    removeButton.simulate('click');

    expect(mockedOnPlayerRemove).toBeCalledWith(1);
});