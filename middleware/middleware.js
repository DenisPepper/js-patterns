function Pipeline(...middlewares) {
    const stack = middlewares
  
    const push = (...middlewares) => {
      stack.push(...middlewares)
    }
  
    const execute = async (context) => {
      let prevIndex = -1
  
      const runner = async (index) => {
        if (index === prevIndex) {
          throw new Error('next() called multiple times')
        }
  
        prevIndex = index
  
        const middleware = stack[index]
  
        if (middleware) {
          await middleware(context, () => {
            return runner(index + 1)
          })
        }
      }
  
      await runner(0)
    }
  
    return { push, execute }
  }
  

  // create a middleware pipeline
const pipeline = Pipeline(
    // with an initial middleware
    (ctx, next) => {
      console.log(ctx)
      next()
    }
  )
  
  // add some more middlewares
  pipeline.push(
    (ctx, next) => {
      ctx.value = ctx.value + 21
      next()
    },
    (ctx, next) => {
      ctx.value = ctx.value * 2
      next()
    }
  )
  
  // add the terminating middleware
  pipeline.push((ctx, next) => {
    console.log(ctx)
    // not calling `next()`
  })
  
  // add another one for fun ¯\_(ツ)_/¯
  pipeline.push((ctx, next) => {
    console.log('this will not be logged')
  })
  
  // execute the pipeline with initial value of `ctx`
  pipeline.execute({ value: 0 })
