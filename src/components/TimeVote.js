import TimeSelector from './TimeSelector';
import VoteResult from './VoteResult';

const TimeVote = () => {

    return (
        <div>
            {/* if user already select their available time */}
            <VoteResult />
            {/* if not */}
            <TimeSelector />
        </div>
    )
}

export default TimeVote