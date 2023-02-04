import React from 'react';
import useSwipeableViews from 'react-swipeable-views';

export default function Swiped() {
    
    const handlers = useSwipeable({
        onSwiped: (eventData) => console.log("User Swiped!", eventData),
        ...config,
    });

    return <div {...handlers}> You can swipe here </div>;
}