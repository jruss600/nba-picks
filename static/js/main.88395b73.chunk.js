(this["webpackJsonpnba-picks"]=this["webpackJsonpnba-picks"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),E=(a(16),a(17),a(3)),o=a(4),u=a(9),s=a(5),m=a(10),i=a(8),R={AD:{ATL:"UNDER",BOS:"OVER",BKN:"OVER",CHA:"UNDER",CHI:"OVER",CLE:"UNDER",DAL:"UNDER",DEN:"OVER",DET:"OVER",GS:"UNDER",HOU:"OVER",IND:"UNDER",LAC:"OVER",LAL:"OVER",MEM:"UNDER",MIA:"OVER",MIL:"OVER",MIN:"OVER",NO:"UNDER",NY:"OVER",OKC:"OVER",ORL:"OVER",PHI:"OVER",PHX:"UNDER",POR:"UNDER",SAC:"OVER",SA:"UNDER",TOR:"UNDER",UTAH:"UNDER",WSH:"UNDER",locks:["CHA","MEM","WSH"]}},O=function(e){var t=e.team,a=e.line,n=t.logo,r=t.wins,c=t.gamesPlayed,E=Math.round(82*r/c);return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:n,style:{width:"30px",height:"30px"},alt:t.team})),l.a.createElement("td",null,t.team),l.a.createElement("td",null,a),l.a.createElement("td",null,r),l.a.createElement("td",null," ",E),l.a.createElement("td",{style:function(e){var t={backgroundColor:"rgba(0, 255, 0, 0.1)"},n={backgroundColor:"rgba(255, 0, 0, 0.1)"},l={backgroundColor:"rgba(0, 255, 0, 0.4)"},o={backgroundColor:"rgba(255, 0, 0, 0.4)"};return r>a?"OVER"===e?l:o:r+(82-c)<a?"UNDER"===e?l:o:E>a?"OVER"===e?t:n:E<a?"UNDER"===e?t:n:void 0}(R.AD[t.team])},R.AD[t.team]," "))},d={ATL:33.5,BOS:48.5,BKN:43.5,CHA:23.5,CHI:32.5,CLE:24.5,DAL:40.5,DEN:52.5,DET:37.5,GS:47.5,HOU:53.5,IND:46.5,LAC:53.5,LAL:50.5,MEM:27.5,MIA:43.5,MIL:57.5,MIN:35.5,NO:39.5,NY:26.5,OKC:31.5,ORL:41.5,PHI:54.5,PHX:28.5,POR:46.5,SAC:37.5,SA:46.5,TOR:46.5,UTAH:53.5,WSH:26.5},p=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={teams:[],loaded:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=30").then((function(e){return e.json()})).then((function(t){var a=t.sports[0].leagues[0].teams,n=[];a.map((function(e,t){return n.push({id:t,team:e.team.abbreviation,wins:e.team.record.items[0].stats[1].value,gamesPlayed:e.team.record.items[0].stats[8].value,logo:e.team.logos[0].href})})),e.setState({teams:n,loaded:!0})})).catch((function(e){alert("Error: ",e)}))}},{key:"render",value:function(){var e=this.state,t=e.teams;return e.loaded?l.a.createElement(i.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Logo"),l.a.createElement("th",null,"Team"),l.a.createElement("th",null,"Line"),l.a.createElement("th",null,"Wins"),l.a.createElement("th",null,"Projected Wins"),l.a.createElement("th",null,"DOBS"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement(O,{key:e.id,team:e,line:d[e.team]})})))):l.a.createElement("div",null,"Loading...")}}]),t}(n.Component);var D=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("p",null,"App goes here"),l.a.createElement(p,null))};a(18);c.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.88395b73.chunk.js.map