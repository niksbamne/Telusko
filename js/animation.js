// JavaScript Document

$(function(){
		$(".element").typed({
			 strings: ["import com.telusko.tusk.entity.Feedback;<br><br>public class FeedbackDao{<br>@Autowire<br>private SessionFactory sessionFactory;<br>@Transactional<br>public void addFeedback(Feedback theFeedback) {<br>Session currentSession = sessionFactory.getCurrentSession();<br>currentSession.save(theFeedback);<br><br>}<br>}"],
			typeSpeed: 0,
			loop:true
		});
	});
