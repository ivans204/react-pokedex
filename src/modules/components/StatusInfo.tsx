import { FC } from 'react';

import { Flex } from 'core/components/Flex.style';

import './StatusInfo.scss';

interface StatusInfoProps {
    infoMsg: string;
}

const StatusInfo: FC<StatusInfoProps> = ({ infoMsg }) => {
    return (
        <Flex className="status-info" align={'center'} justify={'center'}>
            <h1>{infoMsg}</h1>
        </Flex>
    );
};

export default StatusInfo;
