import HumTemp from "../component/HumTemp";
import Control from "../component/Control";
import Info from "../component/Info"
import { Row, Col } from 'antd';

export const HomePage=()=>{
  return(
    <>
    <Row>
    <Col span={12}>
    <HumTemp></HumTemp>
    </Col>

    <Col span={12}>
    <Control></Control>
    </Col>
    </Row>
      <hr />
      {/* <Info></Info> */}
    </>
  )
}