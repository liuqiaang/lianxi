import React,{Component,Fragment} from "react"
import { Menu, Icon } from 'antd';
import {withRouter} from "react-router-dom"
import menuList from './menuList'
import "./index.less"
const { SubMenu }  = Menu;

class NavLeft extends Component{
	constructor(){
		super()
		this.state={
			navdata:[]
		}	
	}
	jump(path){
		this.props.history.push(path)
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({navdata:menuList})
		},500)
	}
	renderItem(item){
				if(item.children){
					return (
						<SubMenu title={item.title} key={item.id}>
							{item.children.map((child,index)=>{
								return (
									this.renderItem(child)
								)
							})}
						</SubMenu>
					)
				}else{
					return  <Menu.Item onClick={this.jump.bind(this,item.path)} key={item.id}>{item.title}</Menu.Item>
				}		
	}
	renderNav(data){
		return(
			<Menu mode="vertical" theme='dark'>
			{data.map((item,index)=>{
				return this.renderItem(item)
			})}
			</Menu>
		)
	}
	render(){
		let {navdata}=this.state
		return(
			<div className="navleft-wrapper">			
				<div className="navleft-title">1902admin</div>
  				{this.renderNav(navdata)}
			</div>
		)
	}
}
export default  withRouter(NavLeft)