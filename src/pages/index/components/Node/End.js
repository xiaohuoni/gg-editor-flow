import React from "react";
import { RegisterNode } from "gg-editor";
import startImg from '../../assets/start.png';
import endImg from '../../assets/end.png';
import copytoImg from '../../assets/copyto.png';
import inevitableImg from '../../assets/inevitable.png';
import servicesImg from '../../assets/services.png';

class StartNode extends React.Component {
    render() {
        const nodeConfig = {
            draw(item) {
                const group = item.getGraphicGroup();
                const model = item.getModel();
                const width = 80;
                const height = 80;
                const x = -width / 2;
                const y = -height / 2;
                const borderRadius = 2;
                const keyShape = group.addShape("rect", {
                    attrs: {
                        x,
                        y,
                        width,
                        height,
                        radius: borderRadius,
                        zIndex: -1
                    }
                });
                group.addShape("path", {
                    attrs: {
                        fill: "#FFF",
                        stroke: "#FFF"
                    }
                });
                group.addShape("image", {
                    attrs: {
                        x: -20,
                        y: -30,
                        width: 40,
                        height: 40,
                        img: model.icon
                    }
                });
                group.addShape('text', {
                    attrs: {
                        x: 0,
                        y: 35,
                        textAlign: 'center',
                        text: model.label,
                        fill: 'rgba(51,51,51,1)',
                        fontSize: 15,
                        fontWeight: 600,
                    }
                });
                return keyShape;
            },
            anchor: [
                [0.5, 0], // 上边中点
                [0.5, 1], // 底边中点
                [0, 0.5], // 左边中点
                [1, 0.5] // 右边中点
            ]
        };

        return (
            <RegisterNode name="flow-node" config={nodeConfig} />
        );
    }
}

export default StartNode;
