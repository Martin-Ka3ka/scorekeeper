import PlayersList from './PlayersList';
import Player from '../Player/Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ];
    const playerComponent = shallow(<PlayersList players={players} />);

    const expectedPlayersNumber = playerComponent.find(Player).length;

    expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate on first player', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);

    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(10);

    expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});

it('should call onScoreUpdate on second player', () => {

    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players}
        onScoreUpdate={mockedOnScoreUpdate} />);

    const secondPlayer = playerComponent.find(Player).last();
    const onPlayerScoreChange = secondPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(-1);

    expect(mockedOnScoreUpdate).toBeCalledWith(1, -1);

});

it('should call  onPlayerRemove on first player', () => {

    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]

    const mockedOnPlayerRemove = jest.fn();
    const playerListComponent = shallow(<PlayersList players={players}
        onPlayerRemove={mockedOnPlayerRemove} />);

    const firstPlayer = playerListComponent.find(Player).first();
    const onPlayerRemove = firstPlayer.prop('onPlayerRemove');
    onPlayerRemove(0);

    expect(mockedOnPlayerRemove).toBeCalledWith(0);

});