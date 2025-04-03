function test1(a, b) {
  return [a, b];
}

test1(1, 2);

function test2<Type>(a: Type, b: Type): Type[] {
  return [a, b];
}

test2(2, 4);
