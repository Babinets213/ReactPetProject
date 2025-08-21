#!/bin/bash

echo "🧪 Running local test validation..."

# Check if required files exist
echo "📁 Checking test files..."
if [ ! -f "playwright.config.ts" ]; then
    echo "❌ playwright.config.ts not found"
    exit 1
fi

if [ ! -d "tests/e2e" ]; then
    echo "❌ tests/e2e directory not found"
    exit 1
fi

if [ ! -d ".github/workflows" ]; then
    echo "❌ .github/workflows directory not found"
    exit 1
fi

echo "✅ All test files are in place"

# Run linting
echo "🔍 Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ ESLint failed"
    exit 1
fi
echo "✅ ESLint passed"

# Run type checking
echo "🔧 Running TypeScript type check..."
npx tsc --noEmit
if [ $? -ne 0 ]; then
    echo "❌ TypeScript type check failed"
    exit 1
fi
echo "✅ TypeScript type check passed"

# Build the project
echo "🏗️ Building the project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build successful"

echo "🎉 All local tests passed! Ready for CI/CD"
