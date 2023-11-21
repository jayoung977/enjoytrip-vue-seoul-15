package com.ssafy.vue.board.model.service;

import java.util.List;
import java.util.Map;

import com.ssafy.vue.board.model.BoardDto;
import com.ssafy.vue.board.model.BoardListDto;
import com.ssafy.vue.board.model.LatestBoardDto;

public interface BoardService {

	void writeArticle(BoardDto boardDto) throws Exception;
	BoardListDto listArticle(Map<String, String> map) throws Exception;
	List<LatestBoardDto>  latestListArticle() throws Exception;
//	PageNavigation makePageNavigation(Map<String, String> map) throws Exception;
	BoardDto getArticle(int articleNo) throws Exception;
	void updateHit(int articleNo) throws Exception;
	
	void modifyArticle(BoardDto boardDto) throws Exception;
//	
//	void deleteArticle(int articleNo) throws Exception;
	void deleteArticle(int articleNo, String path) throws Exception;
	
}
