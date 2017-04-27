// JavaScript Document

$(function(){
		$(".element").typed({
			 strings: ["import com.telusko.tusk.entity.Feedback;<br><br>public class FeedbackDao{<br>&nbsp;@Autowire<br>&nbsp;private SessionFactory sessionFactory;<br>&nbsp;@Transactional<br>&nbsp;&nbsp;public void addFeedback(Feedback theFeedback) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Session currentSession = sessionFactory.getCurrentSession();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentSession.save(theFeedback);<br><br>&nbsp;&nbsp;}<br>}"],
			typeSpeed: 0
		});
	});
