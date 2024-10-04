#include <stdio.h>
//perimeter of rec
int main() {
    float a,b;
    printf("enter a:");
    scanf("%f" , &a );
    printf("enter b:");
    scanf("%f" , &b );
    float perimeter = 2 * ( a + b);
    printf("the perimeter is: %.2f/n",perimeter);
    return 0;
}