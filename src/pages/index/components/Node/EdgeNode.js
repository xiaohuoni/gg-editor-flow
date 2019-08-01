import React from "react";
import { RegisterNode, RegisterEdge } from "gg-editor";

class StartNode extends React.Component {
    render() {
        const config = {
            draw(item) {
                const keyShape = this.drawKeyShape(item);
                const group = item.getGraphicGroup();
                const model = item.getModel();
                group.addShape("path", {
                    attrs: {
                        zIndex: 999,
                    }
                });

                // const startPoint = model.startPoint;
                // const endPoint = model.endPoint;

                // this.drawLabel(item);
                return keyShape;
            },
            drawLabel(cfg, group) {
                console.log(cfg);
                console.log(group);

                // 绘制文本
              },

        };

        return (
            <RegisterEdge name="edge-node" config={config} extend={"flow-line-round"} />
        );
    }
}

export default StartNode;
