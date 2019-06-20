import React,{Component} from "react"
import NavLeft from "../../components/navleft/navleft"
import AdminFoot from "../../components/adminfoot/adminfoot"
import AdminHead from "../../components/adminhead/adminhead"
import "./index.less"
import { Row, Col } from 'antd'
class Admin extends Component{
	render(){
		return (
			<div className='admin-wapper'>
			    <Row className='admin-row'>
			      <Col span={4} className='admin-col-left'>
			        <NavLeft></NavLeft>
			      </Col>
			      <Col span={20} className='admin-col-right'>
			        <AdminHead></AdminHead>
			        <div className='admin-right-center'>
			        	{this.props.children}
			        </div>
			        <AdminFoot></AdminFoot>
			      </Col>
			    </Row>
			</div>
		)
	}
}
export default Admin