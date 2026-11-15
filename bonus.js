var createCounter = function(init) {
    let obj={
        init:init,
        after:init,
        increment:function(){
           this.after=this.after+1;
           return this.after
        },
        decrement:function(){
            this.after=this.after-1;
            return this.after
        },
        reset:function(){
            this.after=this.init
            return this.after
        }
    }
    return obj;
};

