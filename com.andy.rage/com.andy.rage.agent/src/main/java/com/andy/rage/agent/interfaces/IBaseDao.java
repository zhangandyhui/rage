package com.andy.rage.agent.interfaces;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface IBaseDao<T> {
	public void add(T t) throws Exception;

	public void update(T t) throws Exception;

	public void deleteById(Object id) throws Exception;

	public T query(T t) throws Exception;

	public int queryByCount(T t) throws Exception;

	public int queryByCountExt(@Param(value="entity")T t) throws Exception;

	public List<T> queryByList(@Param(value="entity")T t,@Param(value = "pageSize") int pageSize,@Param(value = "pageOffset") int pageOffset) throws Exception;

}
