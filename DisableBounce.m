//
//  DisableBounce.m
//  Fivethree
//
//  Created by Gary Großgarten on 26.04.19.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@implementation UIScrollView (NoBounce)
- (void)didMoveToWindow {
    [super didMoveToWindow];
    self.bounces = NO;
}
@end
