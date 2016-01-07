package com.andy.rage.business.interfaces.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andy.rage.agent.entity.UserEntity;
import com.andy.rage.agent.interfaces.IUserDao;
import com.andy.rage.business.interfaces.IUserService;
@Service
public class UserServiceImpl implements IUserService{

	@Autowired
	private IUserDao<UserEntity> userDao;
	
	public int queryByCount() throws Exception {
		return userDao.queryByCount(new UserEntity());
	}

}
