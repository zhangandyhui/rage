package com.andy.rage.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.andy.rage.business.interfaces.IUserService;

/**
 * 用户登录
 * @author zhangandyhui
 * 
 */
@Controller
public class UserController 
{
	@Autowired
	private IUserService userService;
   
	@RequestMapping("login")
	public String login(HttpServletRequest req) throws Exception{
		System.out.println("count==>"+userService.queryByCount());
		return "jsp/login";
	}

	@RequestMapping("info")
	public String info(HttpServletRequest req){
		return "ftl/info";
	}
}
