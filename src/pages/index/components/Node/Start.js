import React from "react";
import { RegisterNode } from "gg-editor";
import startImg from '../../assets/start.png';
import endImg from '../../assets/end.png';
import copytoImg from '../../assets/copyto.png';
import inevitableImg from '../../assets/inevitable.png';

class StartNode extends React.Component {
    render() {
        const config = {
            draw(item) {
                const keyShape = this.drawKeyShape(item);

                // 绘制图标
                const group = item.getGraphicGroup();
                const model = item.getModel();
                // 0.开始结束节点 1. 处理节点 2. 判断节点 3.并行节点 4.知会节点 -1服务节点
                group.addShape("path", {
                    attrs: {
                        fill: "#FFF",
                        stroke: "#FFF"
                    }
                });
                group.addShape("image", {
                    attrs: {
                        x: -20,
                        y: -20,
                        width: 40,
                        height: 40,
                        img: model.icon
                    }
                });

                // group.addShape("label", {
                //     attrs: {
                //       x: -20,
                //       y: -20,
                //       width: 40,
                //       height: 40,
                //     }
                //   });
                group.addShape('text', {
                    attrs: {
                        x: 0,
                        y: 50,
                        textAlign: 'center',
                        text: model.label,
                        fill: 'rgba(51,51,51,1)',
                        fontSize: 15,
                        fontWeight: 600,
                    }
                });
                // 绘制标签
                // this.drawLabel(item);

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
            <RegisterNode name="start-node" config={config} extend={"flow-circular"} />
        );
    }
}

export default StartNode;
