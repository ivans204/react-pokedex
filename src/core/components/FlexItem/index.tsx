import './style.scss';

const FlexItem = ({ children }: { children: JSX.Element }) => {
    return <div className="flex-item-container">{children}</div>;
};

export default FlexItem;
