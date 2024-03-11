export const ColoredMessage = ({color, children}) => {

    const contentStyle = {
        color,  // 객체 생략 표기법 사용.
        fontSize: "20px"
    };

    return <p style={contentStyle}>{children}</p>
};