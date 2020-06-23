import React from 'react';
import { Calendar as DatePicker } from 'react-calendar';
import Icon from '../../utils/icon';

const Calendar = (props) => {
    return (
        <DatePicker
            prev2Label={
                <div>
                    <Icon icon="fast-backward" size="1rem" />
                </div>
            }
            prevLabel={
                <div>
                    <Icon icon="left-arrow" size="1rem" />
                </div>
            }
            nextLabel={
                <div>
                    <Icon icon="right-arrow" size="1rem" />
                </div>
            }
            next2Label={
                <div>
                    <Icon icon="fast-forward" size="1rem" />
                </div>
            }
            {...props}
        />
    );
};
export default Calendar;
