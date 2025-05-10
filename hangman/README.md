
* Single responsiblity principle -: ![alt text](image-1.png) 

* Component has a different different phases when it comes on UI 
FirstPhase -: Mounting ( Component has been inserted inside DOM )
SecondPhase -: Render or Updating  ( Our component will get updated and based on that component UI will get changed )
ThirdPhase -: UnMounting ( Removing the component from DOM )


I want to track these events now , So react will give us a hook

The hook is called as useEffect() 
Primary use case -: It will help you to control instructins to be executed during different lifecycle events
Secondary use case -: In useEffect we write a code to get the data

* npm init -y -: Initializes a new Node.js project by creating a package.json file

* Prop drilling -: In React refers to the process of passing data (props) from a parent component down through multiple levels of child components, even if some intermediate components don't need that data themselves

Note -: And to overcome this we use useContext hook

## Destructing with examples -: 
If you skip destructuring, you keep the reference, and changes to one will change the other.
If you destructure, you get a new, independent array — safer, especially in state management (React etc.), or when you want to avoid mutating original data

1. setWordList(data);
Here, you're directly setting wordList to point to the same reference as data.

If data is an array, wordList will now reference that same array.
If you later modify data, wordList also sees those changes, because both point to the same memory location (since arrays and objects are reference types in JavaScript).

2. setWordList([...data]);
Here, you're creating a shallow copy of the data array.

The spread operator (...) expands data into a new array:
wordList becomes a new array, containing the same elements.
Now, even if data changes later, wordList does not change, because it’s a different array in memory.

### best example

const original = {
  name: 'ChatGPT',
  tags: ['AI', 'assistant']
};

// Shallow copy
const shallowCopy = { ...original };

shallowCopy.name = 'GPT-4';           // ✅ Only affects shallowCopy
shallowCopy.tags.push('OpenAI');      // ⚠️ Affects both original and shallowCopy!

console.log(original.tags); // ['AI', 'assistant', 'OpenAI']

* Step 1: name is a primitive.

name: 'ChatGPT'
Primitives like strings, numbers, booleans — are copied by value.
When you do { ...original }, it creates a new field:

shallowCopy.name = 'ChatGPT' // new field, copied value then it changes only in shallowCopy and not in original copy

* Step 2: tags is an array (reference type).

tags: ['AI', 'assistant']
Arrays (like objects) are reference types.

When you spread the object:
const shallowCopy = { ...original };
✅ It creates a new object, 🚨 but the reference to the tags array is copied, not the array itself.

shallowCopy.tags === original.tags; // true (they point to the same array!)
When you do:
shallowCopy.tags.push('OpenAI');
You're modifying the array in place — both original.tags and shallowCopy.tags see the change.


const shallowCopy = {
  ...original,
  tags: [...original.tags] // manual shallow copy of the array
};

* step1 -: ...original

You're copying all properties from original into shallowCopy.This includes:

name: 'ChatGPT' ✅ (copied as value)
tags: ['AI', 'assistant'] ⚠️ (copied as reference)
So far it looks like:
shallowCopy = {
  name: 'ChatGPT',
  tags: original.tags // (reference!)
};


* step2 -: tags: [...original.tags]

Here you are overwriting the tags property.You create a new array, and spread elements from original.tags into it.
Effectively:
shallowCopy.tags = ['AI', 'assistant']; // new array!

So now if you do 
shallowCopy.tags.push('OpenAI');
✅ Only shallowCopy.tags is updated. original.tags stays the same.

