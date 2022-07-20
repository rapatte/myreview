import React from 'react';
import { SearchBar, ListingMissionCards } from 'infrastructure/view/components';

export const Missions = () => {
    return (
        <>
            <SearchBar placeholder="Chercher une mission" />
            <ListingMissionCards title="Les Missions" cardType="mission" />
        </>
    );
};
