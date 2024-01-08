import React from 'react';
import styled from 'styled-components';
import PrevImg from '../../assets/images/prev.png'
import NextImg from '../../assets/images/next.png'


export const Pagination = () => {
    return (
        <StyledPagination>
                <Prev src={PrevImg} />
                <Next src={NextImg} />
        </StyledPagination>
    );
};

const StyledPagination = styled.div`

`;
const Prev = styled.img`
width: 45px;
height: 45px;
`;

const Next = styled.img`
width: 45px;
height: 45px;

`;
