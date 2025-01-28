import "./index.css";

interface Props {
    text: string;
}

const SectionHeader = ({ text }: Props) => {
    return (
        <div className="section-header-container">
            <div className="line-container">
                <svg className="line-svg" height="2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="#ACACAC" />
                </svg>
            </div>
            <h2>{text}</h2>
            <div className="line-container">
                <svg className="line-svg" height="2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="#ACACAC" />
                </svg>
            </div>
        </div>
    );
}

export default SectionHeader;
