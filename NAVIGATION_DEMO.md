# React Navigation Demo

This demo showcases the differences between various React Navigation methods in a React Native Expo project.

## Overview

The navigation demo is located in the **Settings** tab and provides interactive examples of different navigation methods with real-time feedback and explanations.

## Navigation Methods Demonstrated

### 1. **push()** - Add to Stack

- **Behavior**: Always adds a new screen to the navigation stack
- **Use Case**: When you want to create multiple instances of the same screen
- **Demo Screen**: `DemoPushScreen`
- **Color Theme**: Green (#4CAF50)

**Key Features:**

- Creates new screen instances even if the screen already exists in the stack
- Useful for creating multiple instances (e.g., multiple product detail pages)
- Can lead to deep navigation stacks

### 2. **navigate()** - Smart Navigation

- **Behavior**: Navigates to existing screen or creates new one if it doesn't exist
- **Use Case**: Standard navigation that prevents duplicate screens
- **Demo Screen**: `DemoNavigateScreen`
- **Color Theme**: Blue (#2196F3)

**Key Features:**

- If screen exists in stack, goes back to it
- If screen doesn't exist, creates new one
- Prevents duplicate screens in stack
- More predictable navigation flow

### 3. **pop()** - Remove from Stack

- **Behavior**: Removes current screen from the navigation stack
- **Use Case**: Direct control over stack manipulation
- **Demo Screen**: `DemoPopScreen`
- **Color Theme**: Orange (#FF9800)

**Key Features:**

- Removes current screen from stack
- Can pop multiple screens at once (e.g., `pop(2)`)
- More technical approach to navigation
- Useful for conditional navigation

### 4. **goBack()** - Semantic Back Navigation

- **Behavior**: Goes back to the previous screen
- **Use Case**: Standard back navigation pattern
- **Demo Screen**: `DemoGoBackScreen`
- **Color Theme**: Purple (#9C27B0)

**Key Features:**

- More semantic and intuitive
- Handles hardware back button automatically
- Standard navigation pattern
- Goes back one screen at a time

## Additional Navigation Methods

### **popToTop()**

- Goes back to the first screen in the stack
- Useful for returning to the root screen

### **replace()**

- Replaces the current screen with a new one
- Useful for login/logout flows

### **reset()**

- Resets the entire navigation state
- Useful for clearing the entire navigation history

## How to Use the Demo

1. **Open the Settings Tab**: Navigate to the Settings tab in the bottom navigation
2. **Explore Navigation Methods**: Tap on different navigation method buttons
3. **Observe Behavior**: Notice how each method behaves differently
4. **Check History**: View the navigation history to see what actions were performed
5. **Try Combinations**: Navigate between different demo screens to see interactions

## Demo Features

### Navigation History

- Real-time tracking of navigation actions
- Timestamp for each action
- Clear history functionality

### Route Information

- Current route name
- Whether you can go back
- Stack depth information

### Interactive Buttons

- Color-coded buttons for different navigation types
- Icons for visual clarity
- Descriptive labels explaining each method

## File Structure

```
src/
├── screens/
│   ├── SettingsScreen.tsx          # Main demo interface
│   ├── DemoPushScreen.tsx          # Push navigation demo
│   ├── DemoNavigateScreen.tsx      # Navigate demo
│   ├── DemoPopScreen.tsx           # Pop navigation demo
│   └── DemoGoBackScreen.tsx        # GoBack navigation demo
└── navigation/
    └── TabNavigator.tsx            # Updated with demo screens
```

## Key Differences Summary

| Method       | Behavior               | Use Case            | Stack Impact        |
| ------------ | ---------------------- | ------------------- | ------------------- |
| `push()`     | Always adds new screen | Multiple instances  | Increases depth     |
| `navigate()` | Smart navigation       | Standard navigation | Prevents duplicates |
| `pop()`      | Removes current screen | Direct control      | Decreases depth     |
| `goBack()`   | Goes back one screen   | Standard back       | Decreases depth     |

## Best Practices

1. **Use `navigate()` for standard navigation** - Prevents duplicate screens
2. **Use `push()` when you need multiple instances** - Product details, chat screens
3. **Use `goBack()` for standard back navigation** - More semantic
4. **Use `pop()` for programmatic control** - Conditional navigation
5. **Use `popToTop()` to return to root** - Login/logout flows
6. **Use `reset()` to clear history** - After authentication

## Testing Scenarios

1. **Push Multiple Screens**: Use push to create deep navigation stacks
2. **Navigate to Same Screen**: See how navigate prevents duplicates
3. **Pop vs GoBack**: Compare the behavior of both methods
4. **Cross-Navigation**: Navigate between different demo screens
5. **Reset Navigation**: Clear the entire navigation state

This demo provides a comprehensive understanding of React Navigation methods and their appropriate use cases in React Native applications.
