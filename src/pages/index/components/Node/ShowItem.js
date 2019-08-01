import React from "react";

class StartNode extends React.Component {
  render() {
    const { startImg, label } = this.props;
    return (
      <div style={{
        textAlign: 'center',
      }}>
        <img src={startImg} width={40} height={40} alt=""/><div style={{
          fontSize: '12px',
          fontWeight: 600,
          color: 'rgba(51,51,51,1)',
          lineHeight: '17px',
          marginTop:'10px'
        }}>{label}</div>
      </div>
    );
  }
}

export default StartNode;
