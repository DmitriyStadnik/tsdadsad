
<jsxgraph width="600" height="600">
var brd = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-4,4,4,-4],keepaspectratio:true,axis:true});

var p = [], col = 'red'; 
p.push(brd.create('point',[2,1],{strokeColor:col,fillColor:col})); 
p.push(brd.create('point',[0.75,2.5],{strokeColor:col,fillColor:col})); 
p.push(brd.create('point',[-0.3,0.3],{strokeColor:col,fillColor:col})); 
p.push(brd.create('point',[-3,1],{strokeColor:col,fillColor:col}));      
p.push(brd.create('point',[-0.75,-2.5],{strokeColor:col,fillColor:col}));
p.push(brd.create('point',[1.5,-2.8],{strokeColor:col,fillColor:col}));  
p.push(brd.create('point',[2,-0.5],{strokeColor:col,fillColor:col})); 

var c = brd.create('curve', JXG.Math.Numerics.bspline(p,4), 
               {strokecolor:'blue', strokeOpacity:0.6, strokeWidth:5}); 

var addSegment = function() {
   brd.suspendUpdate();
   p.push(brd.create('point',[Math.random()*8-4,Math.random()*8-4],
           {strokeColor:col,fillColor:col})); 
   brd.unsuspendUpdate();
};

var removeSegment = function() {
   brd.suspendUpdate();

   if (p.length>2) {
       brd.removeObject(p[p.length-1]);  // remove the last point from the list of objects
       p.splice(p.length-1,1);           // remove the last point from the point array.
   }
   brd.unsuspendUpdate();
};
</jsxgraph>

===The underlying JavaScript code===
<source lang="javascript">
var brd = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-4,4,4,-4],keepaspectratio:true,axis:true});

var p = [], col = 'red'; 
p.push(brd.create('point',[2,1],{strokeColor:col,fillColor:col})); 
p.push(brd.create('point',[0.75,2.5],{strokeColor:col,fillColor:col})); 
p.push(brd.create('point',[-0.3,0.3],{strokeColor:col,fillColor:col})); 
p.push(brd.create('point',[-3,1],{strokeColor:col,fillColor:col}));      
p.push(brd.create('point',[-0.75,-2.5],{strokeColor:col,fillColor:col}));
p.push(brd.create('point',[1.5,-2.8],{strokeColor:col,fillColor:col}));  
p.push(brd.create('point',[2,-0.5],{strokeColor:col,fillColor:col})); 

var c = brd.create('curve', JXG.Math.Numerics.bspline(p,4), 
               {strokecolor:'blue', strokeOpacity:0.6, strokeWidth:5}); 

var addSegment = function() {
   brd.suspendUpdate();
   p.push(brd.create('point',[Math.random()*8-4,Math.random()*8-4],
           {strokeColor:col,fillColor:col})); 
   brd.unsuspendUpdate();
};

var removeSegment = function() {
   brd.suspendUpdate();

   if (p.length>2) {
       brd.removeObject(p[p.length-1]);  // remove the last point from the list of objects
       p.splice(p.length-1,1);           // remove the last point from the point array.
   }
   brd.unsuspendUpdate();
};
</source>
