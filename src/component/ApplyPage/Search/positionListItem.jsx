const PositionListItem = ({position = {
                            positionTitle: '',
                            description: '',
                            responsibilities: '',
                            requirements: '',
                            startDate: '',
                            endDate: '',
                            categoryType: '',
                            remarks: '',
                            active: false,
                            team: '',
                        }}) => {
    console.log(position);
    return (
        <div>
            {position.positionTitle}
        </div>
    );
}

export default PositionListItem;